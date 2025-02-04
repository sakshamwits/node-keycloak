const FrequencyController = {
    frequency(req: any, res: any){
        try {
            const data = req.body
            let parameter = req.params.parameter
            if (!parameter) parameter = "getEarliest"
            const dataArray = data.dataArray
            const mapper: {[key:string]:number} = {}
            let maxCount = 0
            let maxVar = ''
            dataArray.forEach((element: string) => {
                let currentCount = 1
                if(mapper.hasOwnProperty(element)) {
                    currentCount += mapper[element]
                }
                mapper[element] = currentCount
                if (parameter === "getEarliest" && currentCount > maxCount){
                    maxCount = currentCount
                    maxVar = element
                }
                else if (parameter === "getLatest" && currentCount >= maxCount){
                    maxCount = currentCount
                    maxVar = element
                }
            })
            res.json({maxCount, maxVar})

        } catch (error) {
            res.error(error)
        }
    }
}

export default FrequencyController