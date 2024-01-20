import prisma from './prisma.service'

export const createEmployee = async (employeeDetails: any) => {
    try {
        var date = new Date(employeeDetails.dob)
        await prisma.employee.create({
            data: {
                ...employeeDetails,
                "dob": date
            }
        })
        return "success"
    } catch (error) {
        console.log(error);
        return "error"
    }
}

export const getEmployee = async (employeeId: string ) => {
    try {
        const employee = await prisma.employee.findFirst({
            where: {
                id: parseInt(employeeId)
            }
        })
        return employee
    } catch (error) {
        console.log(error)
        return
    }
}

export const updateEmployee = async (id: string, updateData: any) => {
    try {
        const employee = await prisma.employee.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...updateData
            }
        })
        return employee
    } catch (error) {
        console.log(error)
        return
    }
}

export const deleteEmployee = async (id: string) => {
    try {
        await prisma.employee.delete({
            where: {
                id: parseInt(id)
            }
        })
        return "success"
    } catch (error) {
        console.log(error)
        return
    }
}

export const getEmployees = async (search: any, limit: any, offset: any, sortBy: any, sortOrder: any) => {
    try {
        if (!search) {
            const response = await prisma.employee.findMany({
                skip: Number(offset),
                take: Number(limit),
                orderBy: {
                    [sortBy.toString()]: sortOrder
                },
            });
            return response
        } else {
            const response = await prisma.employee.findMany({
                where: {
                    OR: [
                        {
                            lastName: {
                                search: String(search)
                            }
                        }, {
                            firstName: {
                                search: String(search)
                            }
                        }, {
                            email: {
                                search: String(search)
                            }
                        }
                    ]

                },
                skip: Number(offset),
                take: Number(limit),
                orderBy: {
                    [sortBy.toString()]: sortOrder
                },
            })
            return response
        }
    } catch (error) {
        console.log(error)
        return "error"
    }
}