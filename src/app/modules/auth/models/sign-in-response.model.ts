export interface SignInResponseModel {
    token: string; // Giriş yaptıktan sonra dönen token bilgisi
    username: string; // Kullanıcı adı
    roles: string[]; // Kullanıcının rolleri (örneğin: admin, user)
  }