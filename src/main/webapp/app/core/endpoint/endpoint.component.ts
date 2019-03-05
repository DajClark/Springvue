import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginModalService from '@/account/login-modal.service';
import CEndpoints from '@/core/endpoints/endpoints.vue';

@Component({
  components: {
    endpoints: CEndpoints
  }
})
export default class Endpoint extends Vue {
  @Inject('loginModalService')
  private loginModalService: () => LoginModalService;

  public openLogin(): void {
    this.loginModalService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
