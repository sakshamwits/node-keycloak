const IntroductionController = {
    getUser(req: any, res: any){
        try {
            const name = req.params.name
            if (!name) return res.status(400).json({message: "name not provided", status: 400})
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
            res.status(404).json({message: "Name not found"})
        } catch (error: any) {
            res.error(error)
        }
    }
}

export default IntroductionController