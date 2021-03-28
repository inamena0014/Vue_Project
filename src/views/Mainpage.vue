<template>
  <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-toolbar-title>ระบบฐานข้อมูลบุคลากร</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item" 
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'ข้อมูลบุคลากร' , 'ตำแหน่งทางวิชาการ' , 'รายงานผลดำเนินงาน',
        ],
      }
    },
  }
</script>