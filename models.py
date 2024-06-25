from pydantic import BaseModel
class FormData(BaseModel):
    username: str
    email: str
    issue: str
    body: str