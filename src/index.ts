require('dotenv').config()
import express from 'express'
import { Request, Response, Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { authenticate } from './middleware/auth';
import { createEmployeeController, deleteEmployeeController, getEmployeeController, getEmployeesController, updateEmployeeController } from './controller/user.controller';


const app: Express = express();
const port: number = 3000;

// --------------------------------------------------------



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

app.get('/status', async (req: Request, res: Response) => {
    res.send("Node server is running")
})

// -------------------------------------------------------

app.post('/employee', createEmployeeController)
app.get('/employee/:employeeId', getEmployeeController)
app.put('/employee/:employeeId', updateEmployeeController)
app.delete('/employee/:employeeId', deleteEmployeeController)
app.get('/employees', getEmployeesController)

// -----------------------------------------------------
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app;