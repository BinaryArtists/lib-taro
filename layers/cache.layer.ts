

export interface CacheControl {
  clear: () => void;
}

class CacheLayer {
  control: CacheControl = {
    clear: () => {}
  }

  constructor () {

  }
}

export const cachelayer = new CacheLayer();