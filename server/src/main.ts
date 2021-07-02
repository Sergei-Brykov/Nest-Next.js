import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module";

const start = async () => {
    try {
        const PORT = 3000
        const app = await NestFactory.create(AppModule)
        await app.listen(PORT, () => console.log(`Server up in port = ${PORT}`))
    } catch (e) {

    }
}

start()