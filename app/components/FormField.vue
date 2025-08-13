<template>
  <div>
    <v-text-field
      v-if="!field.type || field.type === 'input'"
      v-bind="$attrs"
      :type="field.inputType || 'text'"
      :color="colors.primary"
      :base-color="colors.stroke"
      bg-color="#fff"
      :label="field.label"
      variant="outlined"
      rounded
      :rules="[
        field.required ? rules.required : true,
        field.validation && rules[field.validation] ? rules[field.validation] : true,
        field.validation === 'password' ? rules['passwordLength'] : true,
        field.validation === 'password' ? rules['passwordLower'] : true,
        field.validation === 'password' ? rules['passwordUpper'] : true,
        field.validation === 'password' ? rules['passwordNumber'] : true,
        field.customValidation ? field.customValidation : true,
      ]"
    ></v-text-field>
    <v-textarea
      v-else-if="field.type === 'textarea'"
      v-bind="$attrs"
      :color="colors.primary"
      :base-color="colors.stroke"
      bg-color="#fff"
      variant="outlined"
      rounded
      :label="field.label"
      :rules="[
        field.required ? rules.required : true,
        field.validation && rules[field.validation] ? rules[field.validation] : true,
        field.customValidation ? field.customValidation : true,
      ]"
    ></v-textarea>
    <v-select
      v-else-if="field.type === 'select'"
      v-bind="$attrs"
      :color="colors.primary"
      :base-color="colors.stroke"
      bg-color="#fff"
      variant="outlined"
      rounded
      :items="$attrs.items || selectItems"
      :label="field.label"
      :rules="[
        field.required ? rules.required : true,
        field.validation && rules[field.validation] ? rules[field.validation] : true,
        field.customValidation ? field.customValidation : true,
      ]"
      :multiple="Boolean(field.multi)"
    ></v-select>
    <v-autocomplete
      v-else-if="field.type === 'autocomplete'"
      v-bind="$attrs"
      :color="colors.primary"
      :base-color="colors.stroke"
      bg-color="#fff"
      variant="outlined"
      rounded
      :items="$attrs.items || selectItems"
      :label="field.label"
      :rules="[
        field.required ? rules.required : true,
        field.validation && rules[field.validation] ? rules[field.validation] : true,
        field.customValidation ? field.customValidation : true,
      ]"
      :multiple="Boolean(field.multi)"
    ></v-autocomplete>

    <v-checkbox
      v-else-if="field.type === 'checkbox'"
      v-bind="$attrs"
      :color="colors.primary"
      :base-color="colors.stroke"
      bg-color="#fff"
      variant="outlined"
      rounded
      :label="field.content ? undefined : field.label"
      :items="$attrs.items || selectItems"
      :rules="[
        field.required ? rules.required : true,
        field.validation && rules[field.validation] ? rules[field.validation] : true,
        field.customValidation ? field.customValidation : true,
      ]"
    >
      <template #label v-if="field.content">
        <div class="ml-5" v-html="field.content"></div>
      </template>
    </v-checkbox>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.field-content {
}
</style>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    default() {
      return {};
    },
  },
});

const { t } = useI18n();

const passwordLength = 8;
const rules = {
  required: (v) => !!v || 'Pflichtfeld',
  email: (v) => /.+@.+\..+/.test(v) || 'E-Mail nicht gültig',
  passwordLength: (v) => v?.length >= passwordLength || 'Passwort muss mindestens 8 Zeichen lang sein',
  passwordLower: (v) => /^(?=.*[a-z])/.test(v) || 'Passwort muss mindestens einen Kleinbuchstaben enthalten',
  passwordUpper: (v) => /^(?=.*[A-Z])/.test(v) || 'Passwort muss mindestens einen Großbuchstaben enthalten',
  passwordNumber: (v) => /^(?=.*[0-9])/.test(v) || 'Passwort muss mindestens eine Zahl enthalten',
};

const selectItems = computed(() => {
  return props.field.options
    ? props.field.options.map((option) => {
        return { title: option.text, value: option.value || option.text };
      })
    : [];
});
</script>
