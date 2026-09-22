import { z } from 'zod';

export const barberIdParamSchema = z.object({
  id: z.string().uuid({ message: 'O ID do barbeiro deve ser um UUID válido' }),
});

export const listBarbersQuerySchema = z.object({
  activeOnly: z
    .enum(['true', 'false'], {
      errorMap: () => ({ message: "O parâmetro activeOnly deve ser 'true' ou 'false'" }),
    })
    .optional()
    .transform((val) => (val === undefined ? true : val === 'true')),
});

export const createBarberBodySchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  avatarUrl: z.string().url({ message: 'A URL do avatar deve ser válida' }).optional().nullable(),
  specialty: z.string().optional().nullable(),
  rating: z
    .number({ invalid_type_error: 'A avaliação deve ser um número' })
    .min(0, { message: 'A avaliação mínima é 0' })
    .max(5, { message: 'A avaliação máxima é 5' })
    .optional(),
  experience: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  isActive: z.boolean({ invalid_type_error: 'O campo isActive deve ser booleano' }).optional().default(true),
});

export const updateBarberBodySchema = z.object({
  name: z.string().min(1, { message: 'O nome não pode ser vazio' }).optional(),
  avatarUrl: z.string().url({ message: 'A URL do avatar deve ser válida' }).optional().nullable(),
  specialty: z.string().optional().nullable(),
  rating: z
    .number({ invalid_type_error: 'A avaliação deve ser um número' })
    .min(0, { message: 'A avaliação mínima é 0' })
    .max(5, { message: 'A avaliação máxima é 5' })
    .optional(),
  experience: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  isActive: z.boolean({ invalid_type_error: 'O campo isActive deve ser booleano' }).optional(),
});
