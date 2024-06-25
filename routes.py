from fastapi import APIRouter, HTTPException, status
from fastapi.responses import HTMLResponse, JSONResponse
from pathlib import Path
from fastapi.staticfiles import StaticFiles
from models import FormData
from setting_script.send_email import send_mail

router = APIRouter()

@router.get("/home/", response_class=HTMLResponse)
async def home_path():
    path = Path("static/Html/Index.html")
    return path.read_text()

@router.get("/about/", response_class=HTMLResponse)
async def about_path():
    path = Path("static/Html/About.html")
    return path.read_text()

@router.get("/projects/", response_class=HTMLResponse)
async def project_path():
    path = Path("static/Html/Projects.html")
    return path.read_text()

@router.get("/skills/", response_class=HTMLResponse)
async def skills_path():
    path = Path("static/Html/Skills.html")
    return path.read_text()

@router.get("/contactme", response_class=HTMLResponse)
async def contact_path():
    index_path = Path("static/Html/Contact.html")
    return index_path.read_text()

@router.post("/send_contact/")
async def send_message(data: FormData):
    """
    Esta funcion crea un objeto de la clase formData, para
    posteriormente enviar la informacion a "send_mail" y ejecutar
    el envio del email respectivamente.

    Si hubo un error se levanta el estado http 500.
    Si no hubo ningun error se levanta el estado http 200.
    """
    try:
        response = send_mail(username=data.username,
                            recept_email=data.email, 
                            issue=data.issue,
                            body=data.body)
        if not response:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Parece que hubo un problema..."
            )
        
        sms = "Se envió el formulario con éxito."
        return JSONResponse(content=sms, status_code=status.HTTP_200_OK)
    
    except Exception as e:
        print(f"error: {e}")