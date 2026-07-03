
// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string,
  email: string,
  username: string,
  photo: string,
  firstName: string | null,
  lastName: string | null,
}

declare type UpdateUserParams = {
  username: string,
  photo: string,
  firstName: string | null,
  lastName: string | null,
}

