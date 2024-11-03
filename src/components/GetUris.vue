<template id="getUris.html">
<Dialog modal header="{{ t('Add Downloads By URIs') }}">
  <div class="modal-header">
    <button class="close" ng-click="$dismiss()">&times;</button>
    <h4>{{ t('Add Downloads By URIs') }}</h4>
  </div>
  <form class="modal-body">
    <fieldset>
      <p class="help-block">
    {{ '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.' | translate }}<br />
    {{ '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.' | translate }}<br />
    {{ '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.' | translate }}</br>
      </p>
      <textarea rows="4" style="width: 100%" ng-model="getUris.uris" autofocus placeholder="http://mirror1.com/f1.jpg http://mirror2.com/f1.jpg\nhttp://mirror1.com/f2.mp4 http://mirror2.com/f2.mp4 --out=file2.mp4"></textarea>
      <br /><br />

        <div>
          <div ng-click="getUris.downloadSettingsCollapsed = !getUris.downloadSettingsCollapsed" class="modal-advanced-title">
            {{ 'Download settings' | translate }}
            <span class="caret" ng-class="{ 'rotate-90': getUris.downloadSettingsCollapsed }"></span>
          </div>
          <div collapse="getUris.downloadSettingsCollapsed" class="form-horizontal modal-advanced-options">
            <div class="form-group" ng-repeat="(name, set) in getUris.settings">
              <label class="col-sm-3 control-label">{{name}}</label>

              <div class="col-sm-9 controls">
                <select class="form-control" ng-show="set.options.length && !set.multiline" ng-options="opt for opt in set.options" ng-model="set.val">
                </select>
                <input ng-show="!set.options.length && !set.multiline" type="text" class="form-control input-xxlarge modal-form-input-verylarge" ng-model="set.val"/>
                <textarea ng-show="set.multiline" ng-model="set.val"></textarea>
              </div>
              <br />
            </div>
          </div>

          <br />
          <div ng-click="getUris.advancedSettingsCollapsed = !getUris.advancedSettingsCollapsed" class="modal-advanced-title">
            {{ 'Advanced settings' | translate }}
            <span class="caret" ng-class="{ 'rotate-90': getUris.advancedSettingsCollapsed }"></span>
          </div>
          <div collapse="getUris.advancedSettingsCollapsed" class="form-horizontal modal-advanced-options">
            <div class="form-group" ng-repeat="(name, set) in getUris.fsettings">
              <p class="col-sm-offset-3 col-sm-9 help-block controls">{{set.desc}}</p>

              <label class="col-sm-3 control-label">{{name}}</label>
              <div class="col-sm-9 controls">
                <select class="form-control" ng-show="set.options.length && !set.multiline" ng-options="opt for opt in set.options" ng-model="set.val">
                </select>
                <input ng-show="!set.options.length && !set.multiline" type="text" class="form-control input-xxlarge modal-form-input-verylarge" ng-model="set.val"/>
                <textarea ng-show="set.multiline" ng-model="set.val"></textarea>
              </div>
              <br />
            </div>
          </div>
        </div>
    </fieldset>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" ng-click="$dismiss()">{{ 'Cancel' | translate }}</button>
      <button class="btn btn-default btn-primary" ng-click="$close()">{{ 'Start' | translate }}</button>
    </div>
  </form>
</Dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>
