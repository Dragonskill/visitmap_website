<script>
export default {
  name: 'ScheduleSidebar',
  data() {
    return {
      doctorsNames:[
        "Drg.Dianne Russell",
        "Drg.Marvin McKinney",
        "Drg.Floyd Miles",
        "Drg.Wade Warren",
        "Drg.Savannah Nguyen",
        "Drg.Leslie Alexander",
      ],
      doctorsColors:[
        "#0066ff",
        "#ff33cc",
        "#cc6600",
        "#00ff00",
        "#33cccc",
        "#000000",
      ],
      treatmenTypes:[
        "Implants",
        "Dentyres",
        "Whitening",
        "Root Canal",
        "Bleaching",
        "Scaling"
      ],
      patientsName: [
        "James Jacob",
        "Courtney Henry",
        "Jerome Bell",
        "Esther Howard",
        "Devon Lane"
      ],
    }
  },
}
</script>

<template>
  <v-list select-strategy="classic">


    <v-list-subheader>AVAILABLE DOCTOR</v-list-subheader>

    <v-list-item v-for="(name, index) in doctorsNames" :key="name" :value="name">
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"
          color="indigo"
          hide-details
          :ripple="false"
          ></v-checkbox-btn>
          <div :id="'colorpad-' + index" style="width:8px;height:8px;" :style="{ 'background-color': this.doctorsColors[index]}">
          </div>
        </v-list-item-action>
      </template>
      <v-list-item-title>{{name}}</v-list-item-title>
    </v-list-item>


    <v-list-subheader>TYPE TREATMENT</v-list-subheader>

    <v-list-item v-for="(treatment) in treatmenTypes" :key="treatment" :value="treatment" >
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"
          color="indigo"
          hide-details
          :ripple="false"
          ></v-checkbox-btn>
        </v-list-item-action>
      </template>
      <v-list-item-title>{{treatment}}</v-list-item-title>
    </v-list-item>


    <v-list-subheader>PATIENT QUEUE</v-list-subheader>

    <v-list-item v-for="(treatment) in treatmenTypes" :key="treatment" :value="treatment" >
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"
          color="indigo"
          hide-details
          :ripple="false"
          ></v-checkbox-btn>
        </v-list-item-action>
      </template>
      <v-list-item-title>{{treatment}}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>




<style scoped>
</style>