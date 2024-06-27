import { provideHttpClient, withFetch } from '@angular/common/http';

export function appConfig() {
  return provideHttpClient(withFetch());
}
