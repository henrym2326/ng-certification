"use strict";(self.webpackChunkng_cert_nba=self.webpackChunkng_cert_nba||[]).push([[866],{9866:(ot,Z,o)=>{o.r(Z),o.d(Z,{TeamTrackingModule:()=>it});var m=o(6895),p=o(5580),l=o(4006),g=o(727),t=o(4650),u=o(8527),f=o(529),h=o(4482),x=o(2733),O=o(515),d=o(4004),M=o(7359);function y(a,s){return(0,h.e)((0,M.U)(a,s,arguments.length>=2,!1,!0))}var _=o(8505),I=o(262),F=o(3900),Q=o(4351),E=o(9646);const J=(a,s)=>(a.push(s),a);var D=o(2843);let L=(()=>{class a{constructor(){}handleError(e){return 0===e.status?console.error("An error occurred:",e.error):console.error(`Backend returned code ${e.status}, body was: `,e.error),(0,D._)(()=>new Error("Something bad happened; please try again later."))}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),T=(()=>{class a{constructor(e,n,i,r){this.http=e,this.store=n,this.datePipe=i,this.coreService=r,this._httpOptions={headers:new f.WM({"X-RapidAPI-Key":"2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX","X-RapidAPI-Host":"free-nba.p.rapidapi.com"})},this._TEAM_IDS="teamIds"}readTeamIds(){let e=this.getTeamIds();return e&&this.store.setTeamIds(e),this.store.getTeamIds()}addTeamId(e){let n=this.getTeamIds();n.includes(e)||(this.store.setTeamIds([...n,e]),localStorage.setItem(this._TEAM_IDS,[...n,e].join(",")))}deleteTeamId(e){let n=this.getTeamIds();n=n.filter(i=>i!==e),this.store.setTeamIds(n),n.length?localStorage.setItem(this._TEAM_IDS,n.join(",")):localStorage.removeItem(this._TEAM_IDS)}getTeamIds(){return(localStorage.getItem(this._TEAM_IDS)?.split(",")||[]).map(e=>parseInt(e,10))}getAllTeams(){return this.getTeams(1).pipe(function U(a,s=1/0,e){return s=(s||0)<1?1/0:s,(0,h.e)((n,i)=>(0,x.p)(n,i,a,s,void 0,!0,e))}(e=>e.meta.next_page?this.getTeams(e.meta.next_page):O.E),(0,d.U)(e=>e.data.filter(n=>n.city)),y((e,n)=>e.concat(n),[]),(0,_.b)(e=>this.store.setTeams(e)))}getTeams(e){return this.http.get(`https://free-nba.p.rapidapi.com/teams?page=${e}`,this._httpOptions).pipe((0,I.K)(this.coreService.handleError))}getGames(e){let n=new f.LE;return n=n.append("page",0),n=n.append("team_ids[]",e),[...Array(12)].map((r,S)=>{const b=new Date;return b.setDate(b.getDate()-S),this.datePipe.transform(b,"yyyy-MM-dd")}).forEach(r=>{n=n.append("dates[]",r)}),this.http.get("https://free-nba.p.rapidapi.com/games",{params:n,headers:this._httpOptions.headers}).pipe((0,d.U)(r=>r.data),(0,F.w)(r=>r),(0,Q.b)(r=>(0,E.of)({...r,team_id:e})),function Y(){return(0,h.e)((a,s)=>{y(J,[])(a).subscribe(s)})}(),(0,_.b)(r=>this.store.setGames(e,r)),(0,I.K)(this.coreService.handleError))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(f.eN),t.LFG(u.y),t.LFG(m.uU),t.LFG(L))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var v=o(4859),A=o(7676),$=o(2129),k=o(3238),c=o(3546),C=o(4850),R=o(7392);function B(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",9),t._uU(2,"W"),t.qZA(),t.BQk())}function G(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",10),t._uU(2,"L"),t.qZA(),t.BQk())}function N(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",11),t._uU(2,"D"),t.qZA(),t.BQk())}function P(a,s){if(1&a&&(t.ynx(0),t.YNc(1,B,3,0,"ng-container",8),t.YNc(2,G,3,0,"ng-container",8),t.YNc(3,N,3,0,"ng-container",8),t.BQk()),2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.getScoreDiff(e)>0),t.xp6(1),t.Q6J("ngIf",n.getScoreDiff(e)<0),t.xp6(1),t.Q6J("ngIf",0==n.getScoreDiff(e))}}function j(a,s){if(1&a&&(t.TgZ(0,"div",6)(1,"div"),t._uU(2,"Results for the past 12 days:"),t.qZA(),t.YNc(3,P,4,3,"ng-container",7),t.ALo(4,"async"),t._UZ(5,"p"),t.TgZ(6,"div"),t._uU(7,"Avg pts scored: "),t.TgZ(8,"b"),t._uU(9),t.ALo(10,"number"),t.qZA()(),t.TgZ(11,"div"),t._uU(12,"Avg pts conceded: "),t.TgZ(13,"b"),t._uU(14),t.ALo(15,"number"),t.qZA()(),t._UZ(16,"p"),t.qZA()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,3,e.games$)),t.xp6(6),t.Oqu(t.xi3(10,5,e.avgPointsScored,"1.0-0")),t.xp6(5),t.Oqu(t.xi3(15,8,e.avgPointsConceded,"1.0-0"))}}function q(a,s){1&a&&(t.TgZ(0,"div"),t._uU(1,"No results for the past 12 days"),t.qZA())}let w=(()=>{class a{constructor(e,n){this.store=e,this.teamService=n,this.subscriptions=new g.w0}ngOnInit(){this.games$=this.store.getGames().pipe((0,d.U)(e=>e[this.team.id])),this.subscriptions.add(this.store.getGames().pipe((0,d.U)(e=>e[this.team.id])).subscribe(e=>this.calAvgPoints(e))),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe())}remove(){this.teamService.deleteTeamId(this.team.id)}get icon(){return`https://interstate21.com/nba-logos/${this.team.abbreviation}.png`}getScoreDiff(e){return this.isHomeTeam(e)?e.home_team_score-e.visitor_team_score:e.visitor_team_score-e.home_team_score}calAvgPoints(e){let n=0,i=0;e&&(e.forEach((r,S)=>{this.isHomeTeam(r)?(n+=r.home_team_score,i+=r.visitor_team_score):(n+=r.visitor_team_score,i+=r.home_team_score)}),this.avgPointsScored=n/e.length,this.avgPointsConceded=i/e.length)}isHomeTeam(e){return e.team_id==e.home_team.id}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-card"]],inputs:{team:"team"},decls:19,vars:11,consts:[["mat-button","","color","primary","aria-label","Remove Team","title","Remove Team",2,"float","right",3,"id","click"],["fontIcon","close"],["style","padding-top: 20px",4,"ngIf","ngIfElse"],["no_results",""],[1,"icon",3,"src"],["mat-raised-button","","color","primary","aria-label","See game results","title","See game results",3,"id","routerLink"],[2,"padding-top","20px"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"results",2,"color","green"],[1,"results",2,"color","red"],[1,"results",2,"color","black"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2),t.TgZ(3,"button",0),t.NdJ("click",function(){return n.remove()}),t._UZ(4,"mat-icon",1),t.qZA()(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-content"),t._UZ(8,"mat-divider"),t.YNc(9,j,17,11,"div",2),t.ALo(10,"async"),t.YNc(11,q,2,0,"ng-template",null,3,t.W1O),t.TgZ(13,"div"),t._UZ(14,"img",4),t.qZA()(),t.TgZ(15,"mat-card-actions")(16,"button",5),t._uU(17," See game results >> "),t.qZA()()(),t._UZ(18,"p")),2&e){const i=t.MAs(12);let r;t.xp6(2),t.AsE(" ",n.team.city," [",n.team.abbreviation,"] "),t.xp6(1),t.MGl("id","remove",n.team.abbreviation,""),t.xp6(3),t.hij("",n.team.conference,"ern Conference"),t.xp6(3),t.Q6J("ngIf",!(null==(r=t.lcZ(10,9,n.games$))||!r.length))("ngIfElse",i),t.xp6(5),t.Q6J("src",n.icon,t.LSH),t.xp6(2),t.MGl("id","results",n.team.abbreviation,"")("routerLink","./results/",n.team.abbreviation,"")}},dependencies:[m.sg,m.O5,v.lW,c.a8,c.dn,c.n5,c.$j,c.hq,C.d,R.Hw,p.rH,m.Ov,m.JJ],styles:[".icon[_ngcontent-%COMP%]{width:150px;height:150px}.results[_ngcontent-%COMP%]{font-weight:700;padding-right:10px}"]}),a})();const H=["formDirective"];function X(a,s){if(1&a&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.city," ")}}function W(a,s){if(1&a&&t._UZ(0,"app-team-card",11),2&a){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("team",n.teamsMap[e])}}function z(a,s){if(1&a&&(t.ynx(0),t.YNc(1,W,1,1,"app-team-card",10),t.BQk()),2&a){const e=s.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.teamsMap[e])}}function V(a,s){if(1&a&&(t.ynx(0),t.TgZ(1,"b"),t._uU(2),t.qZA(),t._uU(3),t.TgZ(4,"b"),t._uU(5),t.qZA(),t._UZ(6,"p"),t.BQk()),2&a){const e=s.$implicit;t.xp6(2),t.Oqu(e.home_team.abbreviation),t.xp6(1),t.AsE(" ",e.home_team_score," - ",e.visitor_team_score," "),t.xp6(2),t.Oqu(e.visitor_team.abbreviation)}}function tt(a,s){if(1&a&&(t.TgZ(0,"div")(1,"span"),t._uU(2," Scores of past 12 days:"),t.qZA(),t._UZ(3,"p"),t.YNc(4,V,7,4,"ng-container",3),t.ALo(5,"async"),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,1,e.games$))}}function et(a,s){1&a&&t._uU(0," No results for the past 12 days ")}const at=[{path:"",component:(()=>{class a{constructor(e,n,i){this.fb=e,this.store=n,this.teamService=i,this.subscriptions=new g.w0,this.form=this.fb.group({teamId:["",l.kI.required]}),this.teamsMap={}}ngOnInit(){this.teams$=this.store.getTeams(),this.subscriptions.add(this.store.getTeams().subscribe(e=>{e.forEach(n=>this.teamsMap[n.id]=n)})),this.subscriptions.add(this.teamService.getAllTeams().subscribe()),this.teamIds$=this.teamService.readTeamIds()}submit(){this.form.valid?(this.teamService.addTeamId(this.form.value.teamId),this.form.get("teamId")?.patchValue(""),this.formDirective.resetForm()):alert("Please select a team")}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.qu),t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-tracking"]],viewQuery:function(e,n){if(1&e&&t.Gf(H,5),2&e){let i;t.iGM(i=t.CRH())&&(n.formDirective=i.first)}},decls:14,vars:8,consts:[[1,"container-fluid"],[1,"formGroup",3,"formGroup","ngSubmit"],["formDirective","ngForm"],[1,"row"],["appearance","fill","floatLabel","always",2,"padding-right","20px"],["id","teamSelect","formControlName","teamId","placeholder","Select a team",3,"required"],[3,"value",4,"ngFor","ngForOf"],["id","trackBtn","mat-raised-button","","color","primary","type","submit"],[4,"ngFor","ngForOf"],[3,"value"],[3,"team",4,"ngIf"],[3,"team"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Team"),t.qZA(),t.TgZ(7,"mat-select",5),t.YNc(8,X,2,2,"mat-option",6),t.ALo(9,"async"),t.qZA()(),t.TgZ(10,"button",7),t._uU(11,"Track Team"),t.qZA()()(),t.YNc(12,z,2,1,"ng-container",8),t.ALo(13,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(6),t.Q6J("required",!0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(9,4,n.teams$)),t.xp6(4),t.Q6J("ngForOf",t.lcZ(13,6,n.teamIds$)))},dependencies:[m.sg,m.O5,l._Y,l.JJ,l.JL,l.Q7,l.sg,l.u,v.lW,A.KE,A.hX,$.gD,k.ey,w,m.Ov]}),a})()},{path:"results/:teamCode",component:(()=>{class a{constructor(e,n,i,r){this.router=e,this.route=n,this.store=i,this.teamService=r,this.subscriptions=new g.w0}ngOnInit(){this.teamCode=`${this.route.snapshot.paramMap.get("teamCode")}`,this.subscriptions.add(this.store.getTeams().subscribe(e=>{const n=e.find(i=>i.abbreviation==this.teamCode);null!=n?(this.team=n,this.games$=this.store.getGames().pipe((0,d.U)(i=>i[this.team.id]))):this.router.navigateByUrl("/team-tracking")})),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-results"]],decls:14,vars:7,consts:[[4,"ngIf","ngIfElse"],["no_results",""],["id","backBtn","mat-raised-button","","routerLink","/team-tracking","color","primary","aria-label","Back to all team stats","title","Back to all team stats"],[4,"ngFor","ngForOf"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-content"),t._UZ(6,"mat-divider"),t.YNc(7,tt,6,3,"div",0),t.ALo(8,"async"),t.YNc(9,et,1,0,"ng-template",null,1,t.W1O),t.qZA(),t.TgZ(11,"mat-card-actions")(12,"button",2),t._uU(13," << Back to all team stats "),t.qZA()()()),2&e){const i=t.MAs(10);let r;t.xp6(2),t.AsE(" ",n.team.city," [",n.team.abbreviation,"] "),t.xp6(2),t.hij("",n.team.conference,"ern Conference"),t.xp6(3),t.Q6J("ngIf",!(null==(r=t.lcZ(8,5,n.games$))||!r.length))("ngIfElse",i)}},dependencies:[m.sg,m.O5,v.lW,c.a8,c.dn,c.n5,c.$j,c.hq,C.d,p.rH,m.Ov]}),a})()}];let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.Bz.forChild(at),p.Bz]}),a})();var st=o(1422);let it=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,st.m,nt]}),a})()}}]);