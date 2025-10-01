# Workout Tracker API

API RESTful construida con **Node.js** y **Express** para gestionar usuarios, entrenamientos, ejercicios y progreso.

---

## 📌 Rutas de Usuarios (`/api/v1/users`)

| Método | Endpoint              | Descripción                          | Body esperado (JSON)                        | Códigos de respuesta |
|--------|-----------------------|--------------------------------------|---------------------------------------------|----------------------|
| GET    | `/users`              | Obtener todos los usuarios           | -                                           | 200 OK               |
| GET    | `/users/:id`          | Obtener un usuario por ID            | -                                           | 200 OK, 404 Not Found|
| POST   | `/users`              | Crear un nuevo usuario               | `{ "name": "Ana", "email": "ana@mail.com", "role": "admin" }` | 201 Created, 400 Bad Request |
| PUT    | `/users/:id`          | Actualización completa de un usuario | `{ "name": "Nuevo", "email": "nuevo@mail.com", "role": "user" }` | 200 OK, 400 Bad Request, 404 Not Found |
| PATCH  | `/users/:id`          | Actualización parcial                | `{ "email": "nuevo@mail.com" }`             | 200 OK, 404 Not Found |
| DELETE | `/users/:id`          | Eliminar usuario                     | -                                           | 200 OK, 404 Not Found |

---

## 📌 Ejemplos de Requests

### Crear usuario
```bash
POST http://localhost:8000/api/v1/users
Content-Type: application/json

{
  "name": "Ana Torres",
  "email": "ana@example.com",
  "role": "admin"
}
