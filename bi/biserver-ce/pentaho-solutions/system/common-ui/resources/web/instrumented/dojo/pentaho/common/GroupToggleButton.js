/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/GroupToggleButton.js']) {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'] = [];
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][21] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][22] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][23] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][25] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][33] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][34] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][38] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][39] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][42] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][46] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][50] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][51] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][53] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][54] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][57] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][58] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][65] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][66] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][70] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][71] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][75] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][76] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][80] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][81] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][84] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][85] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][86] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][87] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][90] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][95] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][96] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][97] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][98] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][106] = 0;
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][107] = 0;
}
_$jscoverage['dojo/pentaho/common/GroupToggleButton.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> * Pentaho Big Data</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Copyright (C) 2002-2012 by Pentaho : http://www.pentaho.com</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Licensed under the Apache License, Version 2.0 (the \"License\");</span>","<span class=\"c\"> * you may not use this file except in compliance with</span>","<span class=\"c\"> * the License. You may obtain a copy of the License at</span>","<span class=\"c\"> *    http://www.apache.org/licenses/LICENSE-2.0</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Unless required by applicable law or agreed to in writing, software</span>","<span class=\"c\"> * distributed under the License is distributed on an \"AS IS\" BASIS,</span>","<span class=\"c\"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span>","<span class=\"c\"> * See the License for the specific language governing permissions and</span>","<span class=\"c\"> * limitations under the License.</span>","<span class=\"c\"> * *****************************************************************************</span>","<span class=\"c\"> */</span>","","dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.GroupToggleButton\"</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'pentaho.common.ToggleButton'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'dijit._Templated'</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.GroupToggleButton\"</span><span class=\"k\">,</span> pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>ToggleButton<span class=\"k\">,</span> <span class=\"k\">{</span>","","  groupName<span class=\"k\">:</span> <span class=\"s\">\"group\"</span><span class=\"k\">,</span>           <span class=\"c\">// name of the group of buttons. used as part of the event publishing channel to handle related buttons getting selected</span>","  first<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>                 <span class=\"c\">// is the button first in the group?</span>","  last<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>                  <span class=\"c\">// is the button last in the group?</span>","  orientation<span class=\"k\">:</span> <span class=\"s\">\"horizontal\"</span><span class=\"k\">,</span>    <span class=\"c\">// \"vertical\" or \"horizontal\"</span>","","  postCreate<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>init<span class=\"k\">();</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  postMixInProperties<span class=\"k\">:</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>unselectChannel <span class=\"k\">=</span> <span class=\"s\">'/ButtonGroup/'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>groupName<span class=\"k\">;</span>","","    <span class=\"c\">// listen for related buttons publishing on the unselectChannel. deselect ourselves in that case.</span>","    dojo<span class=\"k\">.</span>subscribe<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>unselectChannel<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">,</span> <span class=\"s\">'_unselect'</span><span class=\"k\">);</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  init<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>_applyGroupStyling<span class=\"k\">();</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _applyGroupStyling<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>orientation <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","      dojo<span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>outerNode<span class=\"k\">,</span> <span class=\"s\">\"pentaho-toggle-button-\"</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>orientation<span class=\"k\">);</span>","","      <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>first<span class=\"k\">)</span> <span class=\"k\">{</span>","        dojo<span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>outerNode<span class=\"k\">,</span> <span class=\"s\">\"pentaho-toggle-button-\"</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>orientation <span class=\"k\">+</span> <span class=\"s\">\"-first\"</span><span class=\"k\">);</span>","      <span class=\"k\">}</span>","","      <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>last<span class=\"k\">)</span> <span class=\"k\">{</span>","        dojo<span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>outerNode<span class=\"k\">,</span> <span class=\"s\">\"pentaho-toggle-button-\"</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>orientation <span class=\"k\">+</span> <span class=\"s\">\"-last\"</span><span class=\"k\">);</span>","      <span class=\"k\">}</span>","","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _setDisabled<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>disabled<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>_applyGroupStyling<span class=\"k\">();</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _onHover<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>_applyGroupStyling<span class=\"k\">();</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _onUnhover<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>_applyGroupStyling<span class=\"k\">();</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _onClick<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>disabled<span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">return</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","    <span class=\"c\">// don't allow unselection by clicking on the selected button</span>","    <span class=\"k\">if</span><span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>checked<span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>_setChecked<span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>checked<span class=\"k\">);</span>","      <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>onChange<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>onChange<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>checked<span class=\"k\">);</span>","      <span class=\"k\">}</span>","      <span class=\"c\">// notify the other members in the group that we've been clicked/selected</span>","      dojo<span class=\"k\">.</span>publish<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>unselectChannel<span class=\"k\">,</span> <span class=\"k\">[</span><span class=\"k\">this</span><span class=\"k\">]);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  _unselect<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span><span class=\"c\">/*Object*/</span> button<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span>button <span class=\"k\">!==</span> <span class=\"k\">this</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">this</span><span class=\"k\">.</span>checked<span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">try</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>set<span class=\"k\">(</span><span class=\"s\">'checked'</span><span class=\"k\">,</span> <span class=\"k\">false</span><span class=\"k\">);</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>_onUnhover<span class=\"k\">();</span>    <span class=\"c\">// to get rid of any styling</span>","      <span class=\"k\">}</span> <span class=\"k\">catch</span> <span class=\"k\">(</span>err<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"c\">// couldn't set it</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  uninitialize<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","    dojo<span class=\"k\">.</span>unsubscribe<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>unselectChannel<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","  <span class=\"k\">}</span>","","","<span class=\"k\">}</span><span class=\"k\">);</span>",""];
_$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][21]++;
dojo.provide("pentaho.common.GroupToggleButton");
_$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][22]++;
dojo.require("pentaho.common.ToggleButton");
_$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][23]++;
dojo.require("dijit._Templated");
_$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][25]++;
dojo.declare("pentaho.common.GroupToggleButton", pentaho.common.ToggleButton, {groupName: "group", first: false, last: false, orientation: "horizontal", postCreate: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][33]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][34]++;
  this.init();
}), postMixInProperties: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][38]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][39]++;
  this.unselectChannel = ("/ButtonGroup/" + this.groupName);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][42]++;
  dojo.subscribe(this.unselectChannel, this, "_unselect");
}), init: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][46]++;
  this._applyGroupStyling();
}), _applyGroupStyling: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][50]++;
  if ((this.orientation != null)) {
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][51]++;
    dojo.addClass(this.outerNode, ("pentaho-toggle-button-" + this.orientation));
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][53]++;
    if (this.first) {
      _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][54]++;
      dojo.addClass(this.outerNode, ("pentaho-toggle-button-" + this.orientation + "-first"));
    }
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][57]++;
    if (this.last) {
      _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][58]++;
      dojo.addClass(this.outerNode, ("pentaho-toggle-button-" + this.orientation + "-last"));
    }
  }
}), _setDisabled: (function (disabled) {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][65]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][66]++;
  this._applyGroupStyling();
}), _onHover: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][70]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][71]++;
  this._applyGroupStyling();
}), _onUnhover: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][75]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][76]++;
  this._applyGroupStyling();
}), _onClick: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][80]++;
  if (this.disabled) {
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][81]++;
    return;
  }
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][84]++;
  if ((! this.checked)) {
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][85]++;
    this._setChecked((! this.checked));
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][86]++;
    if (this.onChange) {
      _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][87]++;
      this.onChange(this.checked);
    }
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][90]++;
    dojo.publish(this.unselectChannel, [this]);
  }
}), _unselect: (function (button) {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][95]++;
  if (((button !== this) && this.checked)) {
    _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][96]++;
    try {
      _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][97]++;
      this.set("checked", false);
      _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][98]++;
      this._onUnhover();
    }
    catch (err) {
    }
  }
}), uninitialize: (function () {
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][106]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/GroupToggleButton.js'][107]++;
  dojo.unsubscribe(this.unselectChannel, this);
})});