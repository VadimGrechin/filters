<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Filter component</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="openDialog = !openDialog"
      >
        <span class="mr-2">Vuetify</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloVuetify/>
    </v-content>
    		<v-dialog v-model="openDialog" max-width='500'>
						<v-card class="elevation-12">
							<v-toolbar dark color="primary">
								<v-toolbar-title>Вход</v-toolbar-title>
								<v-spacer></v-spacer>
							</v-toolbar>
							<v-card-text>
								<v-alert
									:value="true"
									type="warning">
										This is a warning alert.
								</v-alert>
								<v-form>
									<v-text-field 
											prepend-icon="person" 
											v-model="login" 
											name="login" 
											label="Логин" 
											type="text"
											required>
									</v-text-field>
									<v-text-field 
											prepend-icon="lock" 
											v-model="password" 
											name="password" 
											label="Пароль" 
											id="password" 
											type="password"
											required>
									</v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="primary" 
											:disabled="loading" 
											:loading="loading" 
											@click="logIn">Войти</v-btn>
							</v-card-actions>
						</v-card>
		</v-dialog>
  </v-app>
</template>

<script>
import HelloVuetify from './components/HelloVuetify'

export default {
  name: 'App',
  components: {
    HelloVuetify
  },
  data () {
    return {
      //
      openDialog: false,
      login: '',
      password: '',
      loading: false
    }
  },
  methods: {
    logIn() {
      console.log('Вход выполнен')
    }
  }
}
</script>
