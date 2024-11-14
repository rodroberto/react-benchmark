type ModalSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'full';

type Manufacturer = {
  id: number;
  name: string;
}

type Board = {
  id: number;
  name: string;
  manufacturerId?: number;
  manufacturerName: string;
}

type Benchmark = {
  id: number;
  name: string;
  slug?: string;
  unit: string;
  cpu?: string[] | string;
  network?: string[] | string;
  description?: string;
}