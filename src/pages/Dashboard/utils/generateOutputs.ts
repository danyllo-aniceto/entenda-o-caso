import { IForm } from '../types';

const LITERAL_OBJECT: Record<keyof IForm, string> = {
  contextInformation: 'Contexto e informação adicional',
  publicationDate: 'Data de publicação da notícia',
  caseDescription: 'Descrição do caso',
  importanceCase: 'Importância do caso',
  linkYoutube: 'Link do Youtube',
  partFont: 'Parte/Fonte',
};

export const generatedOutputs = (formData: IForm) => {
  const entries = Object.entries(formData);

  const sortedEntries = entries.sort(([, valueA], [, valueB]) =>
    valueA.localeCompare(valueB)
  );

  const sortedObj = Object.fromEntries(sortedEntries);

  let result = '';
  Object.entries(sortedObj).forEach(([key, value]) => {
    result = result + `${LITERAL_OBJECT[key as keyof IForm]}: ${value}\n`;
  });

  return result;
};
