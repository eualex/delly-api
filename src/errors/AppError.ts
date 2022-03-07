class AppError {
  public readonly message: string
  public readonly status: number
  public readonly code: string

  constructor(message: string, status: number, code: string) {
    this.message=message
    this.status=status
    this.code=code
  }
}

export { AppError }
