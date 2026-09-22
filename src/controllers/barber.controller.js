import { prisma } from '../config/prisma.js';

export const barberController = {
  async list(req, res, next) {
    try {
      const { activeOnly } = req.query;
      const where = activeOnly ? { isActive: true } : {};

      const barbers = await prisma.barber.findMany({
        where,
        orderBy: { name: 'asc' },
      });

      return res.json(barbers);
    } catch (error) {
      return next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const barber = await prisma.barber.findUnique({
        where: { id },
      });

      if (!barber) {
        return res.status(404).json({ message: 'Barbeiro não encontrado' });
      }

      return res.json(barber);
    } catch (error) {
      return next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { name, avatarUrl, specialty, rating, experience, tags, isActive } = req.body;

      const barber = await prisma.barber.create({
        data: {
          name,
          avatarUrl,
          specialty,
          rating,
          experience,
          tags,
          isActive,
        },
      });

      return res.status(201).json(barber);
    } catch (error) {
      return next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;

      const existingBarber = await prisma.barber.findUnique({
        where: { id },
      });

      if (!existingBarber) {
        return res.status(404).json({ message: 'Barbeiro não encontrado' });
      }

      const updatedBarber = await prisma.barber.update({
        where: { id },
        data,
      });

      return res.json(updatedBarber);
    } catch (error) {
      return next(error);
    }
  },

  async remove(req, res, next) {
    try {
      const { id } = req.params;

      const existingBarber = await prisma.barber.findUnique({
        where: { id },
      });

      if (!existingBarber) {
        return res.status(404).json({ message: 'Barbeiro não encontrado' });
      }

      await prisma.barber.delete({
        where: { id },
      });

      return res.status(204).send();
    } catch (error) {
      return next(error);
    }
  },
};
