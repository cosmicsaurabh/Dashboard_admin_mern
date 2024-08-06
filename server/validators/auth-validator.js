const { z } = require('zod');//
// create schema

const signupSchema = z.object({
    username: z.string({ required_error: "Name is must " }).trim().min(3, { message: " name must be at least 3 char long" }).max(255, { message: " name must be at most 255 char long" }),

    email: z.string({ required_error: "email is must " }).trim().email( { message: " email is not emailing" }).max(255, { message: " please check again" }),

    phone: z.string({ required_error: "Name is must " }).trim().min(10, { message: " name must be at least 10 char long" }).max(10, { message: " name must be at most 10 char long" }),

    password: z.string({ required_error: "Name is must " }).trim().min(6, { message: " name must be at least 6 char long" }).max(1024, { message: " name must be at most 1024 char long" }),



})
module.exports = signupSchema;