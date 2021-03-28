<template>
    <div>
        <v-text-field 
        :rules="Rules"
        label="Username"
        ></v-text-field>

        <v-text-field
        :rules="Rules"
        label="Password"
        ></v-text-field>

        <v-overflow-btn
        class="my-2"
        :items="dropdown_font"
        menu-props="top"
        label="เลือก"
        hint="Select font"
        target="#dropdown-example-1"
        ></v-overflow-btn>

        <v-btn
        class="ma-2"
        color="primary"
        dark
      >
        Accept
      </v-btn>

        <v-btn
        class="ma-2"
        dark
      >
        Cancel
      </v-btn>
    </div>
</template>
<script>
export default {
    
}
</script>