import z from "zod"
export const nameSchema = z.string().min(1,"Pelo menos 1 caracter")
