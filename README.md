# Employee Management System

To setup the app follow the steps below.

- Run ```npm install``` in the root directory followed by npx prisma generate.
- Ensure the `.env` file which is provided separately is placed in the root folder. The file contains Database URL. Alternatively, feel free to setup a new database by providing a new URL in the config folder in `src/config/index.ts` or the `.env` file. To setup DB, execute `npm run db:init`.
- To start the server, execute ```npm run start:prod```.
- Generate a new token to be used for accessing API endpoints by running the ```src/token.ts``` file. The resulting token is valid for 1 day and is to be used for each API call with header ``` BEARER <TOKEN>```.

## Endpoints
- POST `/employee` - Creates employees. Format :
  ```
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "dob": "2000-12-30",
    "department": "IT",
    "position": "SWE-1"
  }
   ```
- GET `/employee/:employeeId` - Gets employee by ID.
- GET `/employees` - Gets a list of employees according to query parameters.
  - `limit` (optional): Number of records to fetch (default: 10)
  - `offset` (optional): Offset for pagination (default: 0)
  - `sortby` (optional): Sorting field (default: 'firstName'; options: 'lastName'/'dob'/'email'/'deparment'/'position')
  - `sortorder` (optional): Sorting order ('asc' or 'desc', default: 'asc')
  - `search` (optional): Search query for filtering records (default: "")
- PUT `/employee/:employeeId` - Updates employee by id.
- DELETE `/employee/:employeeId` - Deletes the employee data for given ID.

## Notes
- The API uses token based authentication (`authenticate` middleware) to secure endpoints.
- Ensure proper request formatiing in the request formats.  
