export class User {
  nome: string;
  email: string;
  senha: string;
  telefone: number;
  isAdmin: boolean;
  isActive: boolean;
}

export class Login {
  email: string;
  senha: string;
}

export class Response {
  ok: boolean;
  message: string;
}
