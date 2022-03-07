import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { ICreateClientDTO } from "../../dtos/CreateClientDTO";

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO) {
    const userAlreadyExists = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("Client already exist!", 400, "INVALID.DATA");
    }

    const hashPasseword = await hash(password, 10);

    const client = await prisma.clients.create({
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
