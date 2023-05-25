class CustomError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public publicmessage?: string
  ) {
    super(message);
  }
}

export default CustomError;
