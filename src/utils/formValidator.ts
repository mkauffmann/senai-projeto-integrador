/**
 * Utilitários de validação de formulário
 */

// Valida se o nome contém apenas letras e espaços
export function validaNome(nome: string): boolean {
  const regexNome = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  return regexNome.test(nome);
}

// Valida se o CPF tem formato válido
export function validaCpf(cpf: string): boolean {
  const regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  return regexCpf.test(cpf);
}

// Valida se o telefone tem formato válido
export function validaTelefone(telefone: string): boolean {
  const regexTelefone = /^\(?\d{0,2}\)?\s?\d{4}\s?\-?\d{4}$/;
  return regexTelefone.test(telefone);
}

// Valida se o celular tem formato válido
export function validaCelular(celular: string): boolean {
  const regexCelular = /^\(?\d{0,2}\)?\s?\d{4,5}\s?\-?\d{4}$/;
  return regexCelular.test(celular);
}

// Valida se as senhas coincidem e não estão vazias
export function validaSenha(senha: string, confirmacaoSenha: string): boolean {
  return senha !== '' && senha === confirmacaoSenha;
}

// Busca CEP via API ViaCEP e retorna os dados do endereço
export async function buscaCep(cep: string): Promise<any> {
  try {
    const cepLimpo = cep.replace(/\D/g, '');
    
    if (cepLimpo.length !== 8) {
      throw new Error('CEP inválido');
    }
    
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = await resposta.json();
    
    if (dados.erro) {
      throw new Error('CEP não encontrado');
    }
    
    return dados;
  } catch (erro) {
    console.error('Erro ao buscar CEP:', erro);
    throw erro;
  }
} 