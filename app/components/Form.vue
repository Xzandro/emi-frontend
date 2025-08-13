<template>
  <v-form ref="formRef">
    <v-row v-for="row in form.rows" :key="row.id">
      <v-col cols="12" :md="row.fields.length > 1 ? 6 : 12" v-for="field in row.fields" :key="field.id">
        <FormField v-model="formData[field.name]" :field="field" />
      </v-col>
      <v-text-field v-show="false" v-model="formData.streets" :color="colors.secondary" label="Address"></v-text-field>
    </v-row>
    <v-row>
      <v-col>
        <Button :loading="loading" @click="send" class="mt-2" text="Absenden" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const client = useStrapiClient();

const props = defineProps({
  form: {
    type: Object,
    default() {
      return {};
    },
  },
});

const formRef = ref();

const formData = reactive({});
const loading = ref(false);

const send = async () => {
  const formValidation = await formRef.value.validate();
  console.log(formValidation.valid);
  if (formValidation.valid) {
    loading.value = true;
    const formSendData = { ...formData, id: props.form.documentId };

    try {
      await client(`/forms/send/${props.form.documentId}`, {
        method: 'POST',
        body: formSendData,
      });
      // nuxtApp.$toast.success(t('FORM_SENT_SUCCESS'));
      formRef.value.reset();
      loading.value = false;
    } catch (error) {
      // nuxtApp.$toast.error(error.response?.data?.error?.message);
      loading.value = false;
    }
  }
};
</script>
