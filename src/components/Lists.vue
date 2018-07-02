<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Vue Draggable</h1> 
      </v-flex>
    </v-layout>
    <v-layout row>
    <v-flex xs12 sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>My files</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader inset>Folders</v-subheader>
            <draggable v-model="items" class="dragArea" :options="{group:'people'}">
              <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </draggable>
          <v-divider inset></v-divider>
          <v-subheader inset>Files</v-subheader>
            <draggable v-model="items2" class="dragArea" :options="{group:'people'}">
              <v-list-tile v-for="item in items2" :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-btn icon ripple>
                        <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </draggable>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs12 sm3 offset-sm1>
      <v-card>
        <v-toolbar color="cyan" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>
        </v-toolbar>
        <v-list two-line>
            <draggable v-model="items3" :options="{group:'people'}" @start="drag=true" @end="drag=false">
            <template v-for="(item, index) in items3">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar @click="">
                    <v-list-tile-avatar>
                        <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
            </draggable>
                <v-divider inset>mm</v-divider>
                <v-subheader inset>4Files</v-subheader>
                <draggable v-model="items4" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <v-list-tile v-for="item in items4" :key="item.title" avatar @click="">
                        <v-list-tile-avatar>
                        <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                        <v-btn icon ripple>
                            <v-icon color="grey lighten-1">info</v-icon>
                        </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </draggable>
            </v-list>
        </v-card>
    </v-flex>
    <v-flex xs12 sm9 offset-sm1>
        <div class="drag">
            <h2>List 1 Draggable</h2>
            <draggable v-model="list" class="dragArea" :options="{group:'people'}">
                <div v-for="element in list" :key="element.id" >{{element.name}}</div>
            </draggable>
            <h2>List 2 Draggable</h2>
            <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
                <div v-for="element in list2" :key="element.id">{{element.name}}</div>
            </draggable>
        </div>
         <table>
            <thead>
                <tr>
                <th>Actual table example</th>
                </tr>
            </thead>
            <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                <tr v-for="element in myArray" :key="element.id">
                    {{element.name}}
                </tr>
                <v-btn slot="footer" @click="addItem">Add</v-btn>
            </draggable>
        </table>
    </v-flex>
    </v-layout>
  </v-container>
  
</template>

<script>

import draggable from 'vuedraggable'

export default {
  data () {
    return {
      myArray: [
        { id: 1, name: 'abc' },
        { id: 2, name: 'def' },
        { id: 3, name: 'ghi' }
      ],
      list: [
         { name: 'John' },
         { name: 'Joao' },
         { name: 'Jean' }],
      list2: [
          { name: 'Juan' },
          { name: 'Edgard' },
          { name: 'Johnson' }],
      items: [
          { icon: 'check', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'school', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 red--text', title: 'Work', subtitle: 'Jan 28, 2014' }
      ],
      items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ],
      items3: [
          { avatar: '/static/avatars/av1.jpg', icon: 'check', iconClass: 'grey lighten-1 white--text', title: '3Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'school', iconClass: 'grey lighten-1 white--text', title: '3Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 red--text', title: '3Work', subtitle: 'Jan 28, 2014' }
      ],
      items4: [
          { icon: 'assignment', iconClass: 'blue white--text', title: '4Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '4Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    async addItem () {
    }
  }
}
</script>
