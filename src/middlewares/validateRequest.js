import { ZodError } from 'zod';

export function validateRequest({ body, params, query }) {
  return async (req, res, next) => {
    try {
      if (body) {
        req.body = await body.parseAsync(req.body);
      }
      if (params) {
        const parsedParams = await params.parseAsync(req.params);
        Object.keys(req.params).forEach((key) => delete req.params[key]);
        Object.assign(req.params, parsedParams);
      }
      if (query) {
        const parsedQuery = await query.parseAsync(req.query);
        Object.keys(req.query).forEach((key) => delete req.query[key]);
        Object.assign(req.query, parsedQuery);
      }
      return next();
    } catch (error) {
      if (error instanceof ZodError || error?.name === 'ZodError' || Array.isArray(error?.issues) || Array.isArray(error?.errors)) {
        const issues = error.issues || error.errors || [];
        return res.status(400).json({
          message: 'Erro de validação nos campos informados',
          errors: issues.map((err) => ({
            field: Array.isArray(err.path) ? err.path.join('.') : '',
            message: err.message,
          })),
        });
      }
      return next(error);
    }
  };
}
