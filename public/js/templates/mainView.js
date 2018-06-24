const mainTemplate = `
    <div>
        <span class="count">Count of List: {{list.length}}</span>
        {{#each list}}
        <div class="content">
        
            <div class="noteDate">
                <div class="note-date">{{formatDate plannedDate 'DD.MM.YYYY'}}</div>
            </div>
        
            <div class="noteTitle">{{title}}</div>
            
            <div class="noteImportance">
            {{#each importance}}
              {{#if this}}
                <span class="star rated" >&nbsp;</span>
                {{else}}
                <span class="star">&nbsp;</span>
              {{/if}} 
              {{/each}}
            </div>
            
            <div class="noteDates">
                <label for="finishedNote">Finished</label>
                {{#if isFinished}} 
                  <input class="finishedNote" data-id="{{_id}}" type="checkbox" checked="checked" />
                {{else}}
                  <input class="finishedNote" data-id="{{_id}}" type="checkbox" />
                {{/if}}
            </div>
            
            <div class="declaration" id="declaration">
                <details>
                    <li>{{description}}</li>
                </details>
            </div>
            
            <div class="noteEdit">
                <button class="edit_item" id="noteEdit" data-id="{{_id}}">Edit</button>
                <button class="delete_item" id="deleteEdit" data-id="{{_id}}">Delete</button>
            </div>
        </div>
        {{/each}}
    </div>
`