<cfcomponent>

    <cfproperty name="spotify" />

    <cfset init() />

    <cffunction name="init" access="public">
        <cfset this.spotify = createObject("component", "cfc.de.cmd.spotify.ApiWrapper").init() />
    </cffunction>

    <cffunction name="getAlbum" access="remote" returntype="Struct" returnformat="JSON">
        <cfargument name="albumName" type="string" required="true">
        <cfscript>
            result = this.spotify.getAlbumByName(arguments.albumName);
            return result;
        </cfscript>
    </cffunction>

</cfcomponent>