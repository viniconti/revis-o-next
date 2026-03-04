// Padrões de nomenclaturas para projetos TypeScritp:
// PascalCase -> em páginas e classes
// camelCase -> usado em funções e variáveis
// kebab-case -> pode ser usado no nome dos arquivos
// snake_case -> Pode ser usado em constantes, ex: COR_AZUL

import Card from '@/src/components/card';
import { expiriences } from '@/src/utils/experiences';

export default function SobreMim() {
  return (
    <main className='min-h-dvh flex flex-col justify-center items-center'>
      <section className='flex flex-col sm:flex-row gap-4 p-4'>
        {expiriences.map((exp) => (
          <Card key={exp.id} title={exp.title} description={exp.description} />
        ))}
      </section>
    </main>
  );
}
