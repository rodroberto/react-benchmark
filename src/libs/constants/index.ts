export enum PATH {
  BOARD = '/board',
  MANUFACTURER = '/manufacturer',
  BENCHMARK = '/benchmark',
  BENCHMARK_RESULT = '/benchmark-result',
  LOGIN = '/login',
}

export const AUTHENTICATED_PATH = [
  PATH.BOARD,
  PATH.MANUFACTURER,
  PATH.BENCHMARK,
  PATH.BENCHMARK_RESULT,
];

export const BOARD_TABLE_HEADER = ['Board Name', 'Manufacturer'];
export const MANUFACTURER_TABLE_HEADER = ['Manufacturer Name'];
export const BENCHMARK_TABLE_HEADER = ['Name', 'Slug', 'Options', 'Description'];
