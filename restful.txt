POST   /register           - create new user
POST   /login              - login

GET    /users              - list users
GET    /users/:userId      - gets user by id
PUT    /users/:userId      - updates user by id
DELETE /users/:userId      - delete user by id

GET    /users/:userId/dogs - lists all user's dogs
POST   /users/:userId/dogs - creates a new dog
GET    /dogs/:dogId        - gets dog by id
PUT    /dogs/:dogId        - updates dog by id
DELETE /dogs/:dogId        - delete dog by id

GET    /dogs/:dogId/events - lists dog's events   (Pote ton piges kthniatro, pote emvolia ktl)
POST   /dogs/:dogId/events - creates a new event
GET    /events/:eventId    - gets event by id
PUT    /events/:eventId    - update event by id
DELETE /events/:eventId    - delete event by id

GET    /dogs/:dogId/sevents - lists dog's symptom events (pote kai gia poso kairo eixe diarroia,
                                                                ekane emetous ktl)
POST   /dogs/:dogId/sevents - creates a new symptom event
GET    /sevents/:seventId   - gets symptom event by id
PUT    /sevents/:seventId   - update symptom event by id
DELETE /sevents/:seventId   - delete symptom event by id

GET    /symptoms            - lists all symptoms
POST   /symptoms            - create a new symptom
GET    /symptoms/:symptomId - gets a symptom by id
PUT    /symptoms/:symptomId - update a symptom by id
DELETE /symptoms/:symptomId - delete a symptom by id

GET    /diseases            - lists all diseases
POST   /diseases            - create a new disease
GET    /diseases/:diseaseId - get disaease by id
PUT    /diseases/:diseaseId - update a disease by id
DELETE /diseases/:diseaseId - delete a disease by id