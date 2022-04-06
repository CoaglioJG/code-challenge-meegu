export function Idade(birthdate) {
  const birthdateFormatEua = new Date(birthdate);

  let ano_aniversario = birthdateFormatEua.getFullYear();
  let mes_aniversario = birthdateFormatEua.getMonth();
  let dia_aniversario = birthdateFormatEua.getDate();

  const dia_hoje = new Date();
  const ano_atual = dia_hoje.getFullYear();
  const mes_atual = dia_hoje.getMonth() + 1;
  const dia_atual = dia_hoje.getDate();
  ano_aniversario = +ano_aniversario;
  mes_aniversario = +mes_aniversario;
  dia_aniversario = +dia_aniversario;
  let quantos_anos = ano_atual - ano_aniversario;

  if (
    mes_atual < mes_aniversario ||
    (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
  ) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}
