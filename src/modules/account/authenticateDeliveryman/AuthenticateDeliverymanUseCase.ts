import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IAuthenticateDeliverymanDTO } from "../dtos/AuthenticateDeliverymanDTO";

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliverymanDTO) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      },
    })

    if(!deliveryman) {
      throw new AppError("Username or password invalid!", 400, "INVALID.DATA")
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if(!passwordMatch) {
      throw new AppError("Username or password invalid!", 400, "INVALID.DATA")
    }

    const token = sign({ username }, `${process.env.SECRET_KEY}`, {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token
  }
}
