import { ZodError } from 'zod';

export function validateRequest({ body, params, query }) {
  return async (req, res, next) => {
    try {
      if (body) {
        req.body = await body.parseAsync(req.body);
      }
      if (params) {
        req.params = await params.parseAsync(req.params);
      }
      if (query) {
        req.query = await query.parseAsync(req.query);
      }
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'Erro de validação nos campos informados',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return next(error);
    }
  };
}
