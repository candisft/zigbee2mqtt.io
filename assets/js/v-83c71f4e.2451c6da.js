"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[73912],{926272:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i=JSON.parse('{"key":"v-83c71f4e","path":"/devices/DNCKATSW004.html","title":"Custom devices (DiY) DNCKATSW004 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) DNCKATSW004 control via MQTT","description":"Integrate your Custom devices (DiY) DNCKATSW004 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (bottom_left endpoint)","slug":"switch-bottom-left-endpoint","link":"#switch-bottom-left-endpoint","children":[]},{"level":3,"title":"Switch (bottom_right endpoint)","slug":"switch-bottom-right-endpoint","link":"#switch-bottom-right-endpoint","children":[]},{"level":3,"title":"Switch (top_left endpoint)","slug":"switch-top-left-endpoint","link":"#switch-top-left-endpoint","children":[]},{"level":3,"title":"Switch (top_right endpoint)","slug":"switch-top-right-endpoint","link":"#switch-top-right-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1701024074000},"filePathRelative":"devices/DNCKATSW004.md"}')},421782:(t,e,o)=>{o.r(e),o.d(e,{default:()=>g});var i=o(166252);const d=(0,i._)("h1",{id:"custom-devices-diy-dnckatsw004",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#custom-devices-diy-dnckatsw004","aria-hidden":"true"},"#"),(0,i.Uk)(" Custom devices (DiY) DNCKATSW004")],-1),c=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DNCKATSW004")],-1),a=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("td",null,"Description",-1),n={href:"https://github.com/dzungpv/dnckatsw00x/",target:"_blank",rel:"noopener noreferrer"},h=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), action, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DNCKATSW004.jpg",alt:"Custom devices (DiY) DNCKATSW004"})])],-1),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint" aria-hidden="true">#</a> Switch (bottom_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint" aria-hidden="true">#</a> Switch (bottom_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-left-endpoint" aria-hidden="true">#</a> Switch (top_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-right-endpoint" aria-hidden="true">#</a> Switch (top_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_right&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>release_bottom_left</code>, <code>hold_bottom_left</code>, <code>release_bottom_right</code>, <code>hold_bottom_right</code>, <code>release_top_left</code>, <code>hold_top_left</code>, <code>release_top_right</code>, <code>hold_top_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),_={},g=(0,o(983744).Z)(_,[["render",function(t,e){const o=(0,i.up)("RouterLink"),_=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[c,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,i.w5)((()=>[(0,i.Uk)("Custom devices (DiY)")])),_:1})])]),(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i._)("a",n,[(0,i.Uk)("DNCKAT quadruple key wired wall light switch"),(0,i.Wm)(_)])])]),h,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);