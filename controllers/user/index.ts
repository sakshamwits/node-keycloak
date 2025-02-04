const UserController = {
    getUser(req: any, res: any){
        try {
            const name = req.params.name
            const data = {
                "saksham": "Hello, Myself Saksham Kohli",
                "ekuspreet": "Hello, Myself Ekuspreet Singh",
                "harnoor": "Hello, Myself Harnoor Singh"
            }
            for (const [key, value] of Object.entries(data)){
                if (name === key) {
                    return res.status(200).json({name: key, introduction: value})
                }
            }
            res.status(200).json({message: "Name not found"})
        } catch (error: any) {
            res.status(500).json(error)
        }
    }
}

export default UserController