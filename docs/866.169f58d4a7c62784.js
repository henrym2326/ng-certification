"use strict";(self.webpackChunkng_cert_nba=self.webpackChunkng_cert_nba||[]).push([[866],{9866:(it,C,i)=>{i.r(C),i.d(C,{TeamTrackingModule:()=>st});var c=i(6895),l=i(5580),d=i(4006),g=i(727),t=i(4650),u=i(8527),h=i(529),f=i(4482),x=i(2733),O=i(515),p=i(4004),M=i(7359);function y(n,o){return(0,f.e)((0,M.U)(n,o,arguments.length>=2,!1,!0))}var _=i(8505),Z=i(262),D=i(3900),F=i(4351),Q=i(9646);const E=(n,o)=>(n.push(o),n);var J=i(2843);let Y=(()=>{class n{constructor(){}handleError(e){return 0===e.status?console.error("An error occurred:",e.error):console.error(`Backend returned code ${e.status}, body was: `,e.error),(0,J._)(()=>new Error("Something bad happened; please try again later."))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),T=(()=>{class n{constructor(e,a,s,r){this.http=e,this.store=a,this.datePipe=s,this.coreService=r,this._httpOptions={headers:new h.WM({"X-RapidAPI-Key":"2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX","X-RapidAPI-Host":"free-nba.p.rapidapi.com"})},this._TEAM_IDS="teamIds"}readTeamIds(){let e=this.getTeamIds();return e&&this.store.setTeamIds(e),this.store.getTeamIds()}addTeamId(e){let a=this.getTeamIds();a.includes(e)||(this.store.setTeamIds([...a,e]),localStorage.setItem(this._TEAM_IDS,[...a,e].join(",")))}deleteTeamId(e){let a=this.getTeamIds();a=a.filter(s=>s!==e),this.store.setTeamIds(a),a.length?localStorage.setItem(this._TEAM_IDS,a.join(",")):localStorage.removeItem(this._TEAM_IDS)}getTeamIds(){return(localStorage.getItem(this._TEAM_IDS)?.split(",")||[]).map(e=>parseInt(e,10))}getAllTeams(){return this.getTeams(1).pipe(function U(n,o=1/0,e){return o=(o||0)<1?1/0:o,(0,f.e)((a,s)=>(0,x.p)(a,s,n,o,void 0,!0,e))}(e=>e.meta.next_page?this.getTeams(e.meta.next_page):O.E),(0,p.U)(e=>e.data.filter(a=>a.city)),y((e,a)=>e.concat(a),[]),(0,_.b)(e=>this.store.setTeams(e)))}getTeams(e){return this.http.get(`https://free-nba.p.rapidapi.com/teams?page=${e}`,this._httpOptions).pipe((0,Z.K)(this.coreService.handleError))}getGames(e){let a=new h.LE;return a=a.append("page",0),a=a.append("team_ids[]",e),[...Array(12)].map((r,A)=>{const b=new Date;return b.setDate(b.getDate()-A),this.datePipe.transform(b,"yyyy-MM-dd")}).forEach(r=>{a=a.append("dates[]",r)}),this.http.get("https://free-nba.p.rapidapi.com/games",{params:a,headers:this._httpOptions.headers}).pipe((0,p.U)(r=>r.data),(0,D.w)(r=>r),(0,F.b)(r=>(0,Q.of)({...r,team_id:e})),function w(){return(0,f.e)((n,o)=>{y(E,[])(n).subscribe(o)})}(),(0,_.b)(r=>this.store.setGames(e,r)),(0,Z.K)(this.coreService.handleError))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN),t.LFG(u.y),t.LFG(c.uU),t.LFG(Y))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=i(4859),I=i(7676),L=i(6413),k=i(3238),m=i(3546),S=i(4850),R=i(7392);function $(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",16),t.BQk())}function G(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",17),t.BQk())}function P(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",18),t.BQk())}function B(n,o){if(1&n&&(t.ynx(0)(1,13),t.YNc(2,$,2,0,"ng-container",14),t.YNc(3,G,2,0,"ng-container",14),t.YNc(4,P,2,0,"ng-container",15),t.BQk()()),2&n){const e=o.$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("ngSwitch",a.getGameResult(e)),t.xp6(1),t.Q6J("ngSwitchCase","W"),t.xp6(1),t.Q6J("ngSwitchCase","L")}}function N(n,o){if(1&n&&(t.TgZ(0,"div",10)(1,"div",11),t._uU(2,"Results for the past 12 days:"),t.qZA(),t.YNc(3,B,5,3,"ng-container",12),t.ALo(4,"async"),t.TgZ(5,"div",0),t._uU(6,"Avg pts scored: "),t.TgZ(7,"b"),t._uU(8),t.ALo(9,"number"),t.qZA()(),t.TgZ(10,"div",3),t._uU(11,"Avg pts conceded: "),t.TgZ(12,"b"),t._uU(13),t.ALo(14,"number"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,3,e.games$)),t.xp6(5),t.Oqu(t.xi3(9,5,e.avgPointsScored,"1.0-0")),t.xp6(5),t.Oqu(t.xi3(14,8,e.avgPointsConceded,"1.0-0"))}}function j(n,o){1&n&&(t.TgZ(0,"div",10),t._uU(1,"No results for the past 12 days"),t.qZA())}let H=(()=>{class n{constructor(e,a){this.store=e,this.teamService=a,this.subscriptions=new g.w0}ngOnInit(){this.games$=this.store.getGames().pipe((0,p.U)(e=>e[this.team.id])),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe()),this.subscriptions.add(this.store.getGames().pipe((0,p.U)(e=>e[this.team.id])).subscribe(e=>this.calAvgPoints(e)))}remove(){this.teamService.deleteTeamId(this.team.id)}get icon(){return`https://interstate21.com/nba-logos/${this.team.abbreviation}.png`}getScoreDiff(e){return this.isHomeTeam(e)?e.home_team_score-e.visitor_team_score:e.visitor_team_score-e.home_team_score}getGameResult(e){return this.getScoreDiff(e)>0?"W":this.getScoreDiff(e)<0?"L":"D"}calAvgPoints(e){let a=0,s=0;e&&(e.forEach((r,A)=>{this.isHomeTeam(r)?(a+=r.home_team_score,s+=r.visitor_team_score):(a+=r.visitor_team_score,s+=r.home_team_score)}),this.avgPointsScored=a/e.length,this.avgPointsConceded=s/e.length)}isHomeTeam(e){return e.team_id==e.home_team.id}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.y),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-card"]],inputs:{team:"team"},decls:20,vars:11,consts:[[1,"pt-3"],["mat-button","","color","primary","aria-label","Remove Team","title","Remove Team",2,"float","right",3,"id","click"],["fontIcon","close"],[1,"pb-3"],[1,"row"],["class","col-md-3 pb-3",4,"ngIf","ngIfElse"],["no_results",""],[1,"col-md-9"],[1,"icon",3,"src"],["mat-raised-button","","color","primary","aria-label","See game results","title","See game results",3,"id","routerLink"],[1,"col-md-3","pb-3"],[1,"pb-2"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"dot","won"],[1,"dot","lost"],[1,"dot","draw"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-title"),t._uU(3),t.TgZ(4,"button",1),t.NdJ("click",function(){return a.remove()}),t._UZ(5,"mat-icon",2),t.qZA()(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-content"),t._UZ(9,"mat-divider",3),t.TgZ(10,"div",4),t.YNc(11,N,15,11,"div",5),t.ALo(12,"async"),t.YNc(13,j,2,0,"ng-template",null,6,t.W1O),t.TgZ(15,"div",7),t._UZ(16,"img",8),t.qZA()()(),t.TgZ(17,"mat-card-actions")(18,"button",9),t._uU(19," See game results >> "),t.qZA()()()()),2&e){const s=t.MAs(14);let r;t.xp6(3),t.AsE(" ",a.team.city," [",a.team.abbreviation,"] "),t.xp6(1),t.MGl("id","remove",a.team.abbreviation,""),t.xp6(3),t.hij("",a.team.conference,"ern Conference"),t.xp6(4),t.Q6J("ngIf",!(null==(r=t.lcZ(12,9,a.games$))||!r.length))("ngIfElse",s),t.xp6(5),t.Q6J("src",a.icon,t.LSH),t.xp6(2),t.MGl("id","results",a.team.abbreviation,"")("routerLink","./results/",a.team.abbreviation,"")}},dependencies:[c.sg,c.O5,c.RF,c.n9,c.ED,v.lW,m.a8,m.dn,m.n5,m.$j,m.hq,S.d,R.Hw,l.rH,c.Ov,c.JJ],styles:['.icon[_ngcontent-%COMP%]{width:150px;height:150px}.dot[_ngcontent-%COMP%]{font-weight:700;color:#fff;height:25px;width:25px;border-radius:50%;display:inline-block;margin-right:5px;text-align:center}.won[_ngcontent-%COMP%]{background-color:#228b22}.won[_ngcontent-%COMP%]:after{content:"W"}.lost[_ngcontent-%COMP%]{background-color:#b22222}.lost[_ngcontent-%COMP%]:after{content:"L"}.draw[_ngcontent-%COMP%]{background-color:gray}.draw[_ngcontent-%COMP%]:after{content:"D"}'],changeDetection:0}),n})();const W=["formDirective"];function X(n,o){if(1&n&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.city," ")}}function z(n,o){if(1&n&&t._UZ(0,"app-team-card",12),2&n){const e=t.oxw().$implicit,a=t.oxw();t.Q6J("team",a.teamsMap[e])}}function K(n,o){if(1&n&&(t.ynx(0),t.YNc(1,z,1,1,"app-team-card",11),t.BQk()),2&n){const e=o.$implicit,a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.teamsMap[e])}}function V(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",0)(2,"b"),t._uU(3),t.qZA(),t._uU(4),t.TgZ(5,"b"),t._uU(6),t.qZA()(),t.BQk()),2&n){const e=o.$implicit;t.xp6(3),t.Oqu(e.home_team.abbreviation),t.xp6(1),t.AsE(" ",e.home_team_score," - ",e.visitor_team_score," "),t.xp6(2),t.Oqu(e.visitor_team.abbreviation)}}function tt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",0),t._uU(2,"Scores of past 12 days:"),t.qZA(),t.YNc(3,V,7,4,"ng-container",4),t.ALo(4,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,e.games$))}}function et(n,o){1&n&&t._uU(0," No results for the past 12 days ")}const nt=[{path:"",component:(()=>{class n{constructor(e,a,s){this.fb=e,this.store=a,this.teamService=s,this.subscriptions=new g.w0,this.form=this.fb.group({teamId:["",d.kI.required]}),this.teamsMap={}}ngOnInit(){this.teamIds$=this.teamService.readTeamIds(),this.teams$=this.store.getTeams(),this.subscriptions.add(this.teamService.getAllTeams().subscribe()),this.subscriptions.add(this.store.getTeams().subscribe(e=>e.forEach(a=>this.teamsMap[a.id]=a)))}submit(){this.form.valid?(this.teamService.addTeamId(this.form.value.teamId),this.form.get("teamId")?.patchValue(""),this.formDirective.resetForm()):alert("Please select a team")}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.qu),t.Y36(u.y),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-tracking"]],viewQuery:function(e,a){if(1&e&&t.Gf(W,5),2&e){let s;t.iGM(s=t.CRH())&&(a.formDirective=s.first)}},decls:17,vars:8,consts:[[1,"container-fluid"],[1,"formGroup",3,"formGroup","ngSubmit"],["formDirective","ngForm"],[1,"row","pb-3"],["appearance","fill","floatLabel","always",1,"pr-2"],["id","teamSelect","formControlName","teamId","placeholder","Select a team",3,"required"],[3,"value",4,"ngFor","ngForOf"],["id","trackBtn","mat-raised-button","","color","primary","type","submit"],[1,"row"],[4,"ngFor","ngForOf"],[3,"value"],["class","col-md-6",3,"team",4,"ngIf"],[1,"col-md-6",3,"team"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(3,"div",3)(4,"div")(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Team"),t.qZA(),t.TgZ(8,"mat-select",5),t.YNc(9,X,2,2,"mat-option",6),t.ALo(10,"async"),t.qZA()()(),t.TgZ(11,"div")(12,"button",7),t._uU(13,"Track Team"),t.qZA()()()(),t.TgZ(14,"div",8),t.YNc(15,K,2,1,"ng-container",9),t.ALo(16,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",a.form),t.xp6(7),t.Q6J("required",!0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,4,a.teams$)),t.xp6(6),t.Q6J("ngForOf",t.lcZ(16,6,a.teamIds$)))},dependencies:[c.sg,c.O5,d._Y,d.JJ,d.JL,d.Q7,d.sg,d.u,v.lW,I.KE,I.hX,L.gD,k.ey,H,c.Ov],changeDetection:0}),n})()},{path:"results/:teamCode",component:(()=>{class n{constructor(e,a,s,r){this.router=e,this.route=a,this.store=s,this.teamService=r,this.subscriptions=new g.w0}ngOnInit(){this.teamCode=`${this.route.snapshot.paramMap.get("teamCode")}`,this.subscriptions.add(this.store.getTeams().subscribe(e=>{const a=e.find(s=>s.abbreviation==this.teamCode);null!=a?(this.team=a,this.games$=this.store.getGames().pipe((0,p.U)(s=>s[this.team.id])),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe())):this.router.navigateByUrl("/team-tracking")}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(u.y),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-results"]],decls:14,vars:7,consts:[[1,"pb-3"],[4,"ngIf","ngIfElse"],["no_results",""],["id","backBtn","mat-raised-button","","routerLink","/team-tracking","color","primary","aria-label","Back to all team stats","title","Back to all team stats"],[4,"ngFor","ngForOf"]],template:function(e,a){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-content"),t._UZ(6,"mat-divider",0),t.YNc(7,tt,5,3,"div",1),t.ALo(8,"async"),t.YNc(9,et,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.TgZ(11,"mat-card-actions")(12,"button",3),t._uU(13," << Back to all team stats "),t.qZA()()()),2&e){const s=t.MAs(10);let r;t.xp6(2),t.AsE(" ",a.team.city," [",a.team.abbreviation,"] "),t.xp6(2),t.hij("",a.team.conference,"ern Conference"),t.xp6(3),t.Q6J("ngIf",!(null==(r=t.lcZ(8,5,a.games$))||!r.length))("ngIfElse",s)}},dependencies:[c.sg,c.O5,v.lW,m.a8,m.dn,m.n5,m.$j,m.hq,S.d,l.rH,c.Ov],changeDetection:0}),n})()}];let at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(nt),l.Bz]}),n})();var ot=i(4466);let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,ot.m,at]}),n})()}}]);