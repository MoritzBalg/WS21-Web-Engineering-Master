#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int isPrim(int n) {
  for(int i = 2; i <= n/2; i++){
    if((n%i)==0)return 0;
  }
  return 1;
}
