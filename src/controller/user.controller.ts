import { Request, Response } from "express";
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../service/user.service";
import prisma from "../service/prisma.service";

export const createEmployeeController = async (req: Request, res: Response) => {
    const {firstName, lastName, email, dob, department, position} = req.body;
    try {
        const result = await createEmployee({firstName, lastName, email, dob, department, position})
        if (result == "success") {
            res.status(201).json({msg: "Employee has been successfully created."})
        } else {
            res.status(400).json("Invalid request")
        }
    } catch (error) {
        console.log(error)
        res.status(400).json("User was not created")
    }
}

export const getEmployeeController = async (req: Request, res: Response) => {
    const {employeeId} = req.params
    try {
        const employee = await getEmployee(employeeId)
        if (employee) {
            res.status(200).json({"employee": employee})
        } else {
            res.status(400).json({msg: "Couldn't find the employee with the provided ID"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "An error occured."})
    }
}

export const updateEmployeeController = async (req: Request, res: Response) => {
    const {employeeId} = req.params
    const updateData = req.body
    try {
        const employee = await updateEmployee(employeeId, updateData)
        if (employee) {
            console.log(employee)
            res.status(201).json({msg: "Successfully updated data"})
        } else {
            res.status(400).json({msg: "Something went wrong"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Couldn't update employee data"})
    }
}

export const deleteEmployeeController = async (req: Request, res: Response) => {
    const {employeeId} = req.params
    try {
        const temp = await deleteEmployee(employeeId)
        if (!temp) {
            res.status(400).json({msg: "Couldn't delete employee with the given ID."})
        } else {
            res.status(200).json({msg: "Successfully deleted the employee with given ID"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Couldn't delete employee data"})
    }
}

export const getEmployeesController = async (req: Request, res: Response) => {
    const { limit = 10, offset = 0, sortby = 'firstName', sortorder = 'asc', search = "" } = req.query;
    try {
        const result = await getEmployees(search, limit, offset, sortby, sortorder)
        res.status(200).json({ msg: 'Success', data: result });
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: 'Error while fetching Employees.' });
    }
}