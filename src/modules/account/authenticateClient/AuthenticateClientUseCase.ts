import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IAuthenticateClientDTO } from "../dtos/AuthenticateClientDTO";

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClientDTO) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      },
    })

    if(!client) {
      throw new AppError("Username or password invalid!", 400, "INVALID.DATA")
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) {
      throw new AppError("Username or password invalid!", 400, "INVALID.DATA")
    }

    const token = sign({ username }, `${process.env.SECRET_KEY}`, {
      subject: client.id,
      expiresIn: "1d"
    })

    return token
  }
}
