import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { ICreateDeliverymanDTO } from "../../dtos/CreateDeliverymanDTO";

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    const userAlreadyExists = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("Deliveryman already exist!", 400, "INVALID.DATA");
    }

    const hashPasseword = await hash(password, 10);

    const client = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPasseword,
      },
    });

    return {
      id: client.id,
      username: client.username
    };
  }
}
