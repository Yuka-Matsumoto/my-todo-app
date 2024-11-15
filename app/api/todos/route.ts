// app/api/todos/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { task } = await req.json();
  const newTodo = await prisma.todo.create({
    data: { task },
  });
  return NextResponse.json(newTodo);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.todo.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json({ message: 'Todo deleted' });
}
