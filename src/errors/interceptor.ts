import { AppError } from './AppError'

import { NextFunction, Request, Response } from "express";

export function errorInterceptor(err: Error, __: Request, res: Response, _: NextFunction) {
  if(err instanceof AppError) {
    return res.status(err.status).json({
      code: err.code,
      message: err.message
    })
  }

  return res.status(500).json({
    message: 'Ocorreu um erro interno!',
    code: 'internal.error'
  })
}